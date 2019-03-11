# Guild

## Install

```
npm i v-money-field
or
yarn add v-money-field
```

## Setup

```
main.js

import VMoneyField from 'v-money-field'
Vue.use(VMoneyField)

```

## Use

```
<v-money-field locale="vi" v-model="price"></v-money-field>
{{ price | money({locale:'vi', currency:'VND'})}}

```

### Options filter default

- locale: 'us',
- style: 'currency',
- currency: 'USD',
- formatThousands: false
