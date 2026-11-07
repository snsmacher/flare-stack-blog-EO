/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Unreplied_Handle_All_TitleInputs */

const zh_dashboard_unreplied_handle_all_title = /** @type {(inputs: Dashboard_Unreplied_Handle_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部标为已处理？`)
};

const en_dashboard_unreplied_handle_all_title = /** @type {(inputs: Dashboard_Unreplied_Handle_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark all as handled?`)
};

/**
* | output |
* | --- |
* | "Mark all as handled?" |
*
* @param {Dashboard_Unreplied_Handle_All_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_handle_all_title = /** @type {((inputs?: Dashboard_Unreplied_Handle_All_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Handle_All_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_handle_all_title(inputs)
	return zh_dashboard_unreplied_handle_all_title(inputs)
});