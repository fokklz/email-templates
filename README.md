
# email-templates

simplify email content generation

[![License](https://img.shields.io/github/license/fokklz/email-templates?style=for-the-badge)](/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@fokklzdev/email-templates?style=for-the-badge)](https://www.npmjs.com/package/@fokklzdev/email-templates)
[![Issues](https://img.shields.io/github/issues/fokklz/email-templates?style=for-the-badge)](https://github.com/fokklz/email-templates/issues)


[![GitHub forks](https://img.shields.io/github/forks/fokklz/email-templates.svg?style=social&label=Fork)](https://github.com/fokklz/email-templates/fork)
[![GitHub stars](https://img.shields.io/github/stars/fokklz/email-templates.svg?style=social&label=Star)](https://github.com/fokklz/email-templates)

# Table of Contents

- [Installation](#installation)
- [Options](#options)
- [Example](#example)

# Installation

```
npm i @fokklzdev/email-templates
```

# Options
all values are optional

key      | default                                      | description
---------|----------------------------------------------|------------------------
content  | \<h1\>Hi\</h1\>                              | html or text content
logo     | https://cdn.fokklz.dev/logo.svg              | company logo (url)
title    | Willkommen                                   | titl
homepage | https://fokklz.dev                           | url
icon     | https://cdn.fokklz.dev/handshake-duotone.svg | big centered icon (url)
color    | #26A69A                                      | text color

# Example

```ts
import { template, templateSync, TemplateOptions} from '@fokklzdev/email-templates';
const options: TemplateOptions = {};

template(options, (err, content) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(content);
});
// or
try{
  console.log(templateSync(options));
}catch(err){
  console.log(err);
}
```
