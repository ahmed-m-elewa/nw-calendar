# Nw Calendar

[![Build Status](https://travis-ci.org/ahmed-m-elewa/nw-calendar.svg?branch=master)](https://travis-ci.org/ahmed-m-elewa/nw-calendar)
[![npm version](https://badge.fury.io/js/nw-calendar.svg)](http://badge.fury.io/js/nw-calendar)
[![GitHub issues](https://img.shields.io/github/issues/ahmed-m-elewa/nw-calendar.svg)](https://github.com/ahmed-m-elewa/nw-calendar/issues)
[![GitHub stars](https://img.shields.io/github/stars/ahmed-m-elewa/nw-calendar.svg)](https://github.com/ahmed-m-elewa/nw-calendar/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ahmed-m-elewa/nw-calendar/master/LICENSE)


[open Demo on stackblitz ⚡](https://stackblitz.com/edit/nw-calendar)
## Table of contents

-  [About](#about)
-  [Getting started](#getting-started)
-  [Examples](#examples)
-  [API](#api)
	-  [Properties](#properties)
	-  [Events](#events)
-  [Locales](#locales)
-  [License](#license)

## About

**nw-calendar** is an angular & ionic library,, supports week and month views, and more than **100 locales**

## Getting Started
First install through npm:

    npm install nw-calendar

then, import **NwCalendarModule** into your app module:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NwCalendarModule } from 'nw-calendar';

	@NgModule({  
	  declarations: [  
	    AppComponent  
	  ],  
	  imports: [  
		 BrowserModule,    
		 NwCalendarModule  
	 ],  
	  providers: [],  
	  bootstrap: [AppComponent]  
	})  
	export class AppModule { }
```
Finally, use  *nw-calendar* component in your template:
```html
	<nw-calendar viewType="month"></nw-calendar>
```
Enjoy 😉

## Examples

 1. Month View [**default**] 
	```html
	<nw-calendar viewType="month"></nw-calendar>
	```
![Month View](https://lh3.googleusercontent.com/s48KDRMy3hbb7ibL5e59n2YQKyk0IVdt4PmuLHQhQV-7yIRYoEch6hdwmjU9MW5rpEYRFr6DpZke "Month View")

 2. Week View
	```html
	<nw-calendar viewType="week"></nw-calendar>
	```
![Week View](https://lh3.googleusercontent.com/HHwRRXNSbWbjm8m5huicBy47ZDqsjWUnnQfsfEl-yn2BiKWq2qNLbuu5lYAVyyUv81p0YX8KDQ3Q "Week View")

## API

### Properties

| Property | Description |  Valid Values | Default |
|--|--|--|--|
| [viewType] | the view type of calendar | 'week' , 'month' | 'month' |
| [locale] | the default language used in calendar | [Locales](#Locales) | 'en' |
| [dir] | the direction of calendar | 'ltr' , 'rtl' | 'ltr' |
| [(selectedDate)] | Selected Date | Date | |
| [range] | Available dates range to allow selection within | {start?: Date , end?: Date } | |
| [isDisabled] | a function returns a boolean to disable specific dates regarding to custom conditions | () => boolean | (date:Date) => { return false;  } |

### Events

| Property | Description | Data |
|--|--|--|
| (navigate) | Navigation Event handler | {start?: Date , end?: Date } |
| (selectedDateChange) | On Date select Event Handler | Date |

## Locales

| Locale | Language |
|-|-|
| en | English |
| af | Afrikaans |
|  ar-dz | Arabic (Algeria) |
|  ar-kw | Arabic (Kuwait) |
|  ar-ly | Arabic (Libya) |
|  ar-ma | Arabic (Morocco) |
|  ar-sa | Arabic (Saudi Arabia) |
|  ar-tn | Arabic (Tunisia) |
|  ar | Arabic |
|  az | Azerbaijani |
|  be | Belarusian |
|  bg | Bulgarian |
|  bm | Bambara |
|  bn | Bengali |
|  bo | Tibetan |
|  br | Breton |
|  bs | Bosnian |
|  ca | Catalan |
|  cs | Czech |
|  cv | Chuvash |
|  cy | Welsh |
|  da | Danish |
|  de-at | German (Austria) |
|  de-ch | German (Switzerland) |
|  de | German |
|  dv | Divehi |
|  el | Greek |
|  en-au | English (Australia) |
|  en-ca | English (Canada) |
|  en-gb | English (United Kingdom) |
|  en-ie | English (Ireland) |
|  en-nz | English (New Zealand) |
|  eo | Esperanto |
|  es-do | Spanish (Dominican Republic) |
|  es-us | Spanish (United States) |
|  es | Spanish |
|  et | Estonian |
|  eu | Basque |
|  fa | Persian |
|  fi | Finnish |
|  fo | Faroese |
|  fr-ca | French (Canada) |
|  fr-ch | French (Switzerland) |
|  fr | French |
|  fy | Western Frisian |
|  gd | Scottish Gaelic |
|  gl | Galician |
|  gom-latn | gom (Latin) |
|  gu | Gujarati |
|  he | Hebrew |
|  hi | Hindi |
|  hr | Croatian |
|  hu | Hungarian |
|  hy-am | Armenian (Armenia) |
|  id | Indonesian |
|  is | Icelandic |
|  it | Italian |
|  ja | Japanese |
|  jv | Javanese |
|  ka | Georgian |
|  kk | Kazakh |
|  km | Khmer |
|  kn | Kannada |
|  ko | Korean |
|  ky | Kirghiz |
|  lb | Luxembourgish |
|  lo | Lao |
|  lt | Lithuanian |
|  lv | Latvian |
|  me | me |
|  mi | Maori |
|  mk | Macedonian |
|  ml | Malayalam |
|  mr | Marathi |
|  ms-my | Malay (Malaysia) |
|  ms | Malay |
|  mt | Maltese |
|  my | Burmese |
|  nb | Norwegian Bokmål |
|  ne | Nepali |
|  nl-be | Dutch (Belgium) |
|  nl | Dutch |
|  nn | Norwegian Nynorsk |
|  pa-in | Punjabi (India) |
|  pl | Polish |
|  pt-br | Portuguese (Brazil) |
|  pt | Portuguese |
|  ro | Romanian |
|  ru | Russian |
|  sd | Sindhi |
|  se | Northern Sami |
|  si | Sinhala |
|  sk | Slovak |
|  sl | Slovenian |
|  sq | Albanian |
|  sr-cyrl | Serbian (Cyrillic) |
|  sr | Serbian |
|  ss | Swati |
|  sv | Swedish |
|  sw | Swahili |
|  ta | Tamil |
|  te | Telugu |
|  tet | Tetum |
|  th | Thai |
|  tl-ph | Tagalog (Philippines) |
|  tlh | Klingon |
|  tr | Turkish |
|  tzl | tzl |
|  tzm-latn | tzm (Latin) |
|  tzm | tzm |
|  uk | Ukrainian |
|  ur | Urdu |
|  uz-latn | Uzbek (Latin) |
|  uz | Uzbek |
|  vi | Vietnamese |
|  x-pseudo | x-pseudo |
|  yo | Yoruba |
|  zh-cn | Chinese (China) |
|  zh-hk | Chinese (Hong Kong SAR China) |
|  zh-tw | Chinese (Taiwan) |

## License

MIT

developed with ❤ by **Ahmed M. Elewa**

