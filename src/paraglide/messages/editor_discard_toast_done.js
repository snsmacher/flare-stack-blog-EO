/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Discard_Toast_DoneInputs */

const zh_editor_discard_toast_done = /** @type {(inputs: Editor_Discard_Toast_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已放弃修改，草稿已还原为已发布的版本`)
};

const en_editor_discard_toast_done = /** @type {(inputs: Editor_Discard_Toast_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes discarded. The draft matches the published version again.`)
};

/**
* | output |
* | --- |
* | "Changes discarded. The draft matches the published version again." |
*
* @param {Editor_Discard_Toast_DoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_discard_toast_done = /** @type {((inputs?: Editor_Discard_Toast_DoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Discard_Toast_DoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_discard_toast_done(inputs)
	return zh_editor_discard_toast_done(inputs)
});