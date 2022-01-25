import { TemplateOptions } from './types';
import ejs = require('ejs');
import deasync = require('deasync');
const DEFAULT_OPTIONS: TemplateOptions = {
  content: '<h1>Hi</h1>',
  logo: 'https://cdn.fokklz.dev/logo.svg',
  title: 'Willkommen',
  homepage: 'https://fokklz.dev',
  icon: 'https://cdn.fokklz.dev/handshake-duotone.svg',
  color: '#26A69A',
};
/*
export const TEMPLATE_PRESETS: { [key: string]: TemplateOptions } = {
  EMAIL_VERIFY: {},
  LOGIN_VERIFY: {},
  PASSWORD_RESET: {},
  PASSWORD_RESET_SUCCESS: {},
};
*/

function _template(
  options: TemplateOptions,
  callback?: ejs.RenderFileCallback<void>
) {
  options = Object.assign(DEFAULT_OPTIONS, options);
  if (callback) {
    ejs.renderFile(__dirname + '/templates/base.ejs', options, callback);
    return;
  } else {
    return ejs.renderFile(__dirname + '/templates/base.ejs', options);
  }
}

function _sync(fn: Function, options: TemplateOptions) {
  let result;
  (fn(options) as Promise<string>)
    .then((s) => (result = s))
    .catch((err) => {
      result = '';
      throw err;
    });
  while (result === undefined) {
    deasync.sleep(100);
  }
  return result;
}

/**
 * template parser
 *
 * @export
 * @param {TemplateOptions} options
 * @param {ejs.RenderFileCallback<void>} callback
 * @return {*}  {void}
 */
export function template(
  options: TemplateOptions,
  callback: ejs.RenderFileCallback<void>
): void {
  _template(options, callback);
}

/**
 * sync template parser
 *
 * @export
 * @param {TemplateOptions} options
 * @return {*}  {string}
 */
export function templateSync(options: TemplateOptions): string {
  return _sync(_template, options);
}

export default template;
