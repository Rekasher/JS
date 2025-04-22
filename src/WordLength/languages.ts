const languages = {
    LAT: /[^$A-Za-z0-9_]/, // латиница
    RUS: /[^а-яА-ЯёЁ0-9]/, // россия
    BLR: /[^ёа-зй-шы-яЁА-ЗЙ-ШЫІіЎў]/, // беларусь
    BGR: /[^а-ъьюяА-ЪЬЮЯ]/, // болгария
    ESP: /[^a-zA-ZáéíñóúüÁÉÍÑÓÚÜ]/, // испания
    ITA: /[^a-zA-ZàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]/, // италия
    DEU: /[^a-zA-ZäöüßÄÖÜẞ]/, // германия
    NOR: /[^a-zA-ZæøåÆØÅ]/, // норвегия
    POL: /[^a-pr-uwy-zA-PR-UWY-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/, // польша
    ROU: /[^a-zA-ZĂÂÎȘȚăâîșț]/, // румыния
    SRB: /[^А-ИК-ШЂЈ-ЋЏа-ик-шђј-ћџ]/, // сербия
    UKR: /[^а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']/, // украина
    FRA: /[^a-zA-ZàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒ]/, // франция
    SWE: /[^a-zA-ZäöåÄÖÅ]/, // швеция
};

const allowedCharsPattern = Object.values(languages)
    .map(r => r.source)
    .map(src => src.replace(/^\[\^/, '').replace(/\]$/, ''))
    .join('');
const combinedLanguageRegex = new RegExp(`[^${allowedCharsPattern}]`, 'g');

export {combinedLanguageRegex}