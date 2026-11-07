/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ host: NonNullable<unknown> }} Editor_Video_Direct_InfoInputs */

const zh_editor_video_direct_info = /** @type {(inputs: Editor_Video_Direct_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`视频直链 · ${i?.host}`)
};

const en_editor_video_direct_info = /** @type {(inputs: Editor_Video_Direct_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Direct video · ${i?.host}`)
};

/**
* | output |
* | --- |
* | "Direct video · {host}" |
*
* @param {Editor_Video_Direct_InfoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_info = /** @type {((inputs: Editor_Video_Direct_InfoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_InfoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_info(inputs)
	return zh_editor_video_direct_info(inputs)
});