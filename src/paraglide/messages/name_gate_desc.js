/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Name_Gate_DescInputs */

const zh_name_gate_desc = /** @type {(inputs: Name_Gate_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号还没有昵称。评论会显示它，之后可以在个人资料里修改。`)
};

const en_name_gate_desc = /** @type {(inputs: Name_Gate_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account has no nickname yet. It appears next to your comments, and you can change it later in your profile.`)
};

/**
* | output |
* | --- |
* | "Your account has no nickname yet. It appears next to your comments, and you can change it later in your profile." |
*
* @param {Name_Gate_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_gate_desc = /** @type {((inputs?: Name_Gate_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Name_Gate_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_name_gate_desc(inputs)
	return zh_name_gate_desc(inputs)
});