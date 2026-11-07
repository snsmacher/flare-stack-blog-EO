/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_HintInputs */

const zh_muted_manager_hint = /** @type {(inputs: Muted_Manager_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理被禁言的用户，必要时恢复其评论权限。`)
};

const en_muted_manager_hint = /** @type {(inputs: Muted_Manager_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage muted users and restore their ability to comment.`)
};

/**
* | output |
* | --- |
* | "Manage muted users and restore their ability to comment." |
*
* @param {Muted_Manager_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_hint = /** @type {((inputs?: Muted_Manager_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_hint(inputs)
	return zh_muted_manager_hint(inputs)
});