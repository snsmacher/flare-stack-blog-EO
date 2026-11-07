/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Time_Ago_Just_NowInputs */

const zh_time_ago_just_now = /** @type {(inputs: Time_Ago_Just_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`刚刚`)
};

const en_time_ago_just_now = /** @type {(inputs: Time_Ago_Just_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`just now`)
};

/**
* | output |
* | --- |
* | "just now" |
*
* @param {Time_Ago_Just_NowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const time_ago_just_now = /** @type {((inputs?: Time_Ago_Just_NowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Time_Ago_Just_NowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_time_ago_just_now(inputs)
	return zh_time_ago_just_now(inputs)
});