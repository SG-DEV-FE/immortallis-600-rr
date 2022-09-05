import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b',
  headers: {
    'secret-key':
      '$2b$10$xQGSxP.Sl/YEC6whT6FeleCnybDSwYXmgIff8k38r2YDXBIaWtVU.',
  },
});

export default instance;
