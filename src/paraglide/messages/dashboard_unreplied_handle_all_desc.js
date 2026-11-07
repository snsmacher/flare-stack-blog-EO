/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Unreplied_Handle_All_DescInputs */

const zh_dashboard_unreplied_handle_all_desc = /** @type {(inputs: Dashboard_Unreplied_Handle_All_DescInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`这 ${formattedCountZh} 条评论会离开待回复列表。评论本身不受影响，也不会通知评论者。`)
};

const en_dashboard_unreplied_handle_all_desc = /** @type {(inputs: Dashboard_Unreplied_Handle_All_DescInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`This comment will leave the list awaiting reply. The comment itself stays, and no one is notified.`);
	return /** @type {LocalizedString} */ (`These ${formattedCountEn} comments will leave the list awaiting reply. The comments themselves stay, and no one is notified.`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "This comment will leave the list awaiting reply. The comment itself stays, and no one is notified." |
* | * | "These {formattedCountEn} comments will leave the list awaiting reply. The comments themselves stay, and no one is notified." |
*
* @param {Dashboard_Unreplied_Handle_All_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_unreplied_handle_all_desc = /** @type {((inputs: Dashboard_Unreplied_Handle_All_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Unreplied_Handle_All_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_unreplied_handle_all_desc(inputs)
	return zh_dashboard_unreplied_handle_all_desc(inputs)
});