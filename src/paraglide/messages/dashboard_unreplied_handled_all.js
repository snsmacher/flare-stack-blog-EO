/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Unreplied_Handled_AllInputs */

const zh_dashboard_unreplied_handled_all = /** @type {(inputs: Dashboard_Unreplied_Handled_AllInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已将 ${formattedCountZh} 条评论标为已处理`)
};

const en_dashboard_unreplied_handled_all = /** @type {(inputs: Dashboard_Unreplied_Handled_AllInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`Marked ${formattedCountEn} comment as handled`);
	return /** @type {LocalizedString} */ (`Marked ${formattedCountEn} comments as handled`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "Marked {formattedCountEn} comment as handled" |
* | * | "Marked {formattedCountEn} comments as handled" |
*
* @param {Dashboard_Unreplied_Handled_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_handled_all = /** @type {((inputs: Dashboard_Unreplied_Handled_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Handled_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_handled_all(inputs)
	return zh_dashboard_unreplied_handled_all(inputs)
});