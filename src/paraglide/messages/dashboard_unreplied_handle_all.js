/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Unreplied_Handle_AllInputs */

const zh_dashboard_unreplied_handle_all = /** @type {(inputs: Dashboard_Unreplied_Handle_AllInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`全部标为已处理（${formattedCountZh}）`)
};

const en_dashboard_unreplied_handle_all = /** @type {(inputs: Dashboard_Unreplied_Handle_AllInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`Mark all as handled (${formattedCountEn})`);
	return /** @type {LocalizedString} */ (`Mark all as handled (${formattedCountEn})`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "Mark all as handled ({formattedCountEn})" |
* | * | "Mark all as handled ({formattedCountEn})" |
*
* @param {Dashboard_Unreplied_Handle_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_handle_all = /** @type {((inputs: Dashboard_Unreplied_Handle_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Handle_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_handle_all(inputs)
	return zh_dashboard_unreplied_handle_all(inputs)
});