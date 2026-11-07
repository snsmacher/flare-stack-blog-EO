/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_IntroInputs */

const zh_friend_apply_intro = /** @type {(inputs: Friend_Apply_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`让认真记录的站点，彼此相遇。`)
};

const en_friend_apply_intro = /** @type {(inputs: Friend_Apply_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A place for thoughtful sites to meet.`)
};

/**
* | output |
* | --- |
* | "A place for thoughtful sites to meet." |
*
* @param {Friend_Apply_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_intro = /** @type {((inputs?: Friend_Apply_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_intro(inputs)
	return zh_friend_apply_intro(inputs)
});