/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Submit_Form_TitleInputs */

const zh_friend_link_submit_form_title = /** @type {(inputs: Friend_Link_Submit_Form_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交申请`)
};

const en_friend_link_submit_form_title = /** @type {(inputs: Friend_Link_Submit_Form_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit Application`)
};

/**
* | output |
* | --- |
* | "Submit Application" |
*
* @param {Friend_Link_Submit_Form_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_submit_form_title = /** @type {((inputs?: Friend_Link_Submit_Form_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Submit_Form_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_submit_form_title(inputs)
	return zh_friend_link_submit_form_title(inputs)
});