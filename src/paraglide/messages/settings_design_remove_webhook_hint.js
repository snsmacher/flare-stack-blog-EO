/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Remove_Webhook_HintInputs */

const zh_settings_design_remove_webhook_hint = /** @type {(inputs: Settings_Design_Remove_Webhook_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将清空端点地址并标记移除密钥，保存通知设置后 Webhook 停用。`)
};

const en_settings_design_remove_webhook_hint = /** @type {(inputs: Settings_Design_Remove_Webhook_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The endpoint URL will be cleared and its secret marked for removal. Saving notification settings will disable Webhook delivery.`)
};

/**
* | output |
* | --- |
* | "The endpoint URL will be cleared and its secret marked for removal. Saving notification settings will disable Webhook delivery." |
*
* @param {Settings_Design_Remove_Webhook_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_remove_webhook_hint = /** @type {((inputs?: Settings_Design_Remove_Webhook_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Remove_Webhook_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_remove_webhook_hint(inputs)
	return zh_settings_design_remove_webhook_hint(inputs)
});