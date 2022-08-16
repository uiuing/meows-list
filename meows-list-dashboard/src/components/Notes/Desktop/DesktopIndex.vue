<template>
	<div class="contain">
		<!-- <h1>随记清单</h1> -->
		<!-- 笔记展示界面，就是初始界面-->
		<div class="noteShow" v-show="isNoteShow">
			<div class="left">
				<h1>
					<center>左盒子</center>
				</h1>
			</div>
			<div class="right">
			<!-- 右盒子是md笔记的预览 -->
				<mavon-editor class="mdShow" v-model="content" :subfield="false" :boxShadow="false"
					:previewBackground="'#ffffff'" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false"
					:scrollStyle="true" :ishljs="true" />
				<!-- 前往md编辑器界面的按钮 -->
				<div class="editButton">
					<el-button style="width: 100%;height: 100%;" circle @click="edit()">
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
								fill="none" version="1.1" width="22.5" height="22.463481903076172"
								viewBox="0 0 22.5 22.463481903076172">
								<g>
									<path
										d="M7.80375,19.9635L22.5,19.9635L22.5,22.4635L0,22.4635L0,17.1597L12.375,4.78473L17.6775,10.0897L7.8025,19.9635L7.80375,19.9635ZM14.1412,3.01848L16.7937,0.365983C17.2819,-0.121994,18.0731,-0.121994,18.5612,0.365983L22.0975,3.90223C22.5855,4.39036,22.5855,5.18161,22.0975,5.66973L19.445,8.32098L14.1425,3.01848L14.1412,3.01848Z"
										fill="#909399" fill-opacity="1" />
								</g>
							</svg>
						</i>
					</el-button>
				</div>
			</div>
		</div>
		<!-- 编辑界面 -->
		<div class="noteWrite" v-show="isNoteWriteShow">
			<!-- md编辑器-->
			<mavon-editor class="mdEditor" :codeStyle="codeStyle" :toolbars="toolbars" v-model="content" :ishljs="true"
				ref="md" @change="change" />
			<!-- 返回上个界面的按钮 -->
			<div class="backButton">
				<el-button style="width: 100%;height: 100%;" circle @click="back()">
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
							version="1.1" width="19" height="20" viewBox="0 0 19 20">
							<g>
								<path
									d="M6,6L6,10L0,5L6,0L6,4L11,4C15.4183,4,19,7.58172,19,12C19,16.4183,15.4183,20,11,20L2,20L2,18L11,18C14.3137,18,17,15.3137,17,12C17,8.68629,14.3137,6,11,6L6,6Z"
									fill="#909399" fill-opacity="1" />
							</g>
						</svg>
					</i>
				</el-button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isNoteShow: true, //笔记显示界面是否显示
				isNoteWriteShow: false, // 编辑界面是否显示
				// 下面是编辑界面使用的
				content: "这里是markdown编辑的内容\n- 1\n- 2",
				page_article: undefined,
				html_content: undefined,
				md_content: undefined,
				// 根据需求取舍
				toolbars: {
					bold: true, // 粗体
					italic: true, // 斜体
					header: true, // 标题
					underline: true, // 下划线
					strikethrough: true, // 中划线
					mark: true, // 标记
					superscript: true, // 上角标
					subscript: true, // 下角标
					quote: true, // 引用
					ol: true, // 有序列表
					ul: true, // 无序列表
					link: true, // 链接
					imagelink: true, // 图片链接
					code: true, // code
					table: true, // 表格
					fullscreen: true, // 全屏编辑
					readmodel: true, // 沉浸式阅读
					htmlcode: true, // 展示html源码
					help: true, // 帮助
					undo: true, // 上一步
					redo: true, // 下一步
					trash: true, // 清空
					save: true, // 保存（触发events中的save事件）
					navigation: true, // 导航目录
					alignleft: true, // 左对齐
					aligncenter: true, // 居中
					alignright: true, // 右对齐
					subfield: true, // 单双栏模式
					preview: true // 预览
				},
				codeStyle: 'monokai-sublime', //主题
				test_html: undefined
			};
		},
		methods: {
			// 返回按钮点击事件
			back() {
				this.isNoteWriteShow = false;
				this.isNoteShow = true;
			},
			// 编辑按钮点击事件
			edit() {
				this.isNoteShow = false;
				this.isNoteWriteShow = true;
			},
			// 前后端交互
		}
	};
</script>

<style scoped>
	.contain {
		width: 100%;
		height: 100%;
	}

	.noteShow {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
	}

	.left {
		height: 100%;
		width: 60%;
		background-color: #d5ebe1;
		/* 这里用的左盒子的右边框实现的分割线，和设计图不一样，后续可以改 */
		border-right: 2px solid #d8d8d8;
	}

	.right {
		height: 100%;
		width: 40%;
	}

	.mdShow {
		height: 100%;
	}

	.noteWrite {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.mdEditor {
		width: 100%;
		height: 100%;
	}

	.backButton {
		/* 圆形 1 */
		position: absolute;
		left: 1%;
		top: 91%;
		width: 39px;
		height: 39px;
		background: #FFFFFF;
		border-radius: 50%;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
		/* opacity: 60%; */
		z-index: 9999;
	}

	.editButton {
		/* 圆形 1 */
		position: absolute;
		right: 1%;
		top: 1%;
		width: 39px;
		height: 39px;
		background: #FFFFFF;
		border-radius: 50%;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
		/* opacity: 60%; */
		z-index: 9999;
	}
</style>
