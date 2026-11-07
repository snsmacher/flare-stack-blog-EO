/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Version_Action_ViewInputs */

const zh_version_action_view = /** @type {(inputs: Version_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看`)
};

const en_version_action_view = /** @type {(inputs: Version_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Version_Action_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_action_view = /** @type {((inputs?: Version_Action_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Action_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_version_action_view(inputs)
	return zh_version_action_view(inputs)
});