
const Regex = {
    MOBILE_REGEX: /^([+]\d{2})?\d{10}$/,
    EMAIL_REGEXP: /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/,
    USERNAME_REGEX: /^[0-9a-zA-Z]+$/,
    FULL_NAME_REGEX: /^[a-zA-Z ]+$/,
    NAME_REGEX: /^[a-zA-Z]+$/,
    PASSWORD_REGEX: /^[a-zA-Z0-9!@#$%^&*()-=_+]{8,60}$/,
    NUMERIC_REGEX: /[^0-9]/g,
    NUMBER_FORMATE_REGEX: /^[0-9\b]+$/,
    FACEBOOK_REGEX: /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?/,
    // TWITTER_REGEX: /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/,
    INSTAGRAM_REGEX: /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/,
}

export default Regex