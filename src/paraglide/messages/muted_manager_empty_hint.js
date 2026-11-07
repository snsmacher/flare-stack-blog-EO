/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_Empty_HintInputs */

const zh_muted_manager_empty_hint = /** @type {(inputs: Muted_Manager_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要禁言时，可以从文章评论中的用户操作菜单处理。`)
};

const en_muted_manager_empty_hint = /** @type {(inputs: Muted_Manager_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can mute a user from their comment’s action menu.`)
};

/**
* | output |
* | --- |
* | "You can mute a user from their comment’s action menu." |
*
* @param {Muted_Manager_Empty_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_empty_hint = /** @type {((inputs?: Muted_Manager_Empty_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_Empty_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_empty_hint(inputs)
	return zh_muted_manager_empty_hint(inputs)
});