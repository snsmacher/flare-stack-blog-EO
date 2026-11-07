/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Submit_TitleInputs */

const zh_friend_link_submit_title = /** @type {(inputs: Friend_Link_Submit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请友链`)
};

const en_friend_link_submit_title = /** @type {(inputs: Friend_Link_Submit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply for Friend Link`)
};

/**
* | output |
* | --- |
* | "Apply for Friend Link" |
*
* @param {Friend_Link_Submit_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_submit_title = /** @type {((inputs?: Friend_Link_Submit_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Submit_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_submit_title(inputs)
	return zh_friend_link_submit_title(inputs)
});