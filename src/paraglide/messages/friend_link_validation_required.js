/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Validation_RequiredInputs */

const zh_friend_link_validation_required = /** @type {(inputs: Friend_Link_Validation_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点名称不能为空`)
};

const en_friend_link_validation_required = /** @type {(inputs: Friend_Link_Validation_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site name is required`)
};

/**
* | output |
* | --- |
* | "Site name is required" |
*
* @param {Friend_Link_Validation_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_validation_required = /** @type {((inputs?: Friend_Link_Validation_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Validation_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_validation_required(inputs)
	return zh_friend_link_validation_required(inputs)
});