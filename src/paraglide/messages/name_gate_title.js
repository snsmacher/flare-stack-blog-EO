/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Name_Gate_TitleInputs */

const zh_name_gate_title = /** @type {(inputs: Name_Gate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先取个昵称吧`)
};

const en_name_gate_title = /** @type {(inputs: Name_Gate_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a nickname to continue`)
};

/**
* | output |
* | --- |
* | "Choose a nickname to continue" |
*
* @param {Name_Gate_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_gate_title = /** @type {((inputs?: Name_Gate_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Name_Gate_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_name_gate_title(inputs)
	return zh_name_gate_title(inputs)
});