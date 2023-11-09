import { reactive } from 'vue';
import CardJson from './db.json';

export const store = reactive ({
    card: CardJson,
    message: 'Booleandoooooo',

})