/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Posts_EndInputs */

const zh_posts_end = /** @type {(inputs: Posts_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已经到底啦`)
};

const en_posts_end = /** @type {(inputs: Posts_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've reached the end`)
};

/**
* | output |
* | --- |
* | "You've reached the end" |
*
* @param {Posts_EndInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_end = /** @type {((inputs?: Posts_EndInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_EndInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_end(inputs)
	return zh_posts_end(inputs)
});