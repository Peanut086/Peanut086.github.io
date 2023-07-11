/*
* @description: 获取随机颜色
* */
export const randomColor = () => {
	const colorList = [
		'#f56a00',
		'#7265e6',
		'#ffbf00',
		'#00a2ae',
		'#ffbf00',
		'#90ee90',
		'#00ced1',
		'#ff69b4',
		'#ba55d3',
		'#cd5c5c',
		'#ffa500',
		'#40e0d0',
		'#1e90ff',
		'#ff6347',
		'#7b68ee',
		'#00fa9a',
		'#ffd700',
		'#6699FF',
		'#ff6666',
		'#3cb371',
		'#b8860b',
		'#30e0e0',
		'#7cfc00',
		'#00fa9a',
		'#ffd700',
		'#6699FF',
		'#ff6666',
		'#3cb371',
		'#b8860b',
		'#30e0e0',
		'#7cfc00',
		'#00fa9a',
		'#ffd700',
		'#6699FF',
		'#ff6666',
	]
	
	return colorList[Math.floor(Math.random() * colorList.length)]
}
