// 获取页面的高度
import getClientHeight from "./getClientHeight";

function Tomato() {}

Tomato.install = function(Vue) {
	// 判断页面所在环境是 android 还是 iOS
	const ua = window.navigator.userAgent;
	const isInAndroid = /android/i.test(ua);

	let tomatoToggleHandler;
	// 保存 footer 最初的 display 属性
	let preDisplay;
	// 保存当前页面的高度
	let preH = getClientHeight();

	Vue.directive('tomato-toggle', {
		bind(el, binding) {
			// 默认的配置
			const dConf = {
				// 是否启用在 android 中对底部固定内容的处理
				isFooterToggleActive: true
			};
			const conf = binding.value || dConf;
			// 判断是否在 android 中处理底部固定的内容
			const { isFooterToggleActive } = conf;
			if(isFooterToggleActive && isInAndroid) {
				tomatoToggleHandler = function() {
					const currentH = getClientHeight();
					// 页面高度变小，说明键盘弹起，需要隐藏相关的内容
					if(currentH < preH) {
						if (!preDisplay) {
							// 获取最初的 display 属性值
							const elComputedStyle = window.getComputedStyle(el, null);
							preDisplay = elComputedStyle.getPropertyValue('display');
						}
						el.style.display = 'none';
					} else {
						el.style.display = preDisplay;
					}
				}
				window.addEventListener('resize', tomatoToggleHandler)
			}
		},
		unbind() {
			// 组件卸载后，移除对应的事件处理函数
			if (tomatoToggleHandler) {
				window.removeEventListener('resize', tomatoToggleHandler)
				tomatoToggleHandler = null;
			}
		}
	})
}

export default Tomato;
