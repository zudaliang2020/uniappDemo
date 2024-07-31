<template>
	<view class="layout">
		<!-- 顶部功能区 -->
		<view class="head">
			<view class="title"><text>计划航班</text></view>
			<view class="iconBox">
				<uni-icons class="icon" type="search" size="20" color="#c5c5c5"></uni-icons>
				<uni-badge class="uni-badge-left-margin" :text="22" absolute="rightTop" size="small">
					<uni-icons class="icon" type="notification" size="20" color="#c5c5c5"></uni-icons>
				</uni-badge>
			</view>
		</view>
		<!-- 中部内容层 -->
		<view class="content">
			<view class="table">
				<view class="tr">
					<view class="th" @click="sortByFlightSchedule()"><text>航班时间</text>
						<view class="diamond"></view>
					</view>
					<view class="th"><text>航班号</text></view>
					<view class="th"><text>飞机号</text></view>
					<view class="th"><text>起降机场</text></view>
					<view class="th"><text>机位-准备室</text></view>
					<view class="th"><text>机组</text></view>
				</view>
				<view class="scroll-box">
					<view v-for="(item,index) in flight" :key="item.flightNumber" class="tr"
						@touchstart="startTouch(index, $event)" @touchmove="onTouchMove" @touchend="endTouch"
						@mousedown="startDrag(index, $event)">
						<view class="td" title="flightSchedule">
							<text>{{item.flightSchedule.substr(0,2)}}/{{item.flightSchedule.substr(2,2)}}<br>{{item.flightSchedule.substr(4,2)}}:{{item.flightSchedule.substr(6,2)}}</text>
						</view>
						<view class="td" title="flightNumber"><text>{{item.flightNumber}}</text></view>
						<view class="td" title="aircraftNumber"><text>{{item.aircraftNumber}}</text></view>
						<view class="td" title="airport"><text>{{item.airport}}</text></view>
						<view class="td" title="boardingGate"><text>{{item.boardingGate}}</text></view>
						<view class="td" title="aircrew"><text class="view" @click="open(item.flightNumber)">查看</text>
						</view>
						<template v-if="isShow[index]">
							<template v-if="!item.favorite">
								<view class="td favorite" title="favorite" @click="handleFavorite(index)">
									<text>收藏</text>
								</view>
							</template>
							<template v-else>
								<view class="td favorite active" title="favorite" @click="handleFavorite(index)">
									<text>取消收藏</text>
								</view>
							</template>
						</template>
					</view>
				</view>

			</view>
		</view>
		<!-- 查看机组详情弹窗 -->
		<uni-popup ref="popup" type="center" :animation="false" :mask-click="false">
			<view class="datails-box">
				<view class="close" @click="close"><uni-icons type="close" size="16" color="#c5c5c5"></uni-icons></view>
				<view class="table-box">
					<text>机组人员</text>
					<view class="table">
						<!-- 表头行 -->
						<view class="tr">
							<view class="th"><text></text></view>
							<view v-for="(item,index) in datails" :key="index" class="th"><text>{{item.name}}</text>
							</view>
						</view>
						<!-- 表格数据行 -->
						<view class="tr">
							<view class="td"><text>机上岗位</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index"><text>{{item.post}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>技术等级</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index">
								<text>{{item.skillLevel}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>左座飞行经历时间</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index"><text>{{item.LExpTime}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>右座飞行经历时间</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index"><text>{{item.RExpTime}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>责任机长飞行经历时间</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index">
								<text>{{item.CaptainExpTime}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>左座次数</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index">
								<text>{{item.LSeatCount}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>右座次数</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index">
								<text>{{item.RSeatCount}}</text>
							</view>
						</view>
						<view class="tr">
							<view class="td"><text>着陆提纵次数</text></view>
							<view class="td" v-for="(item,index) in datails" :key="index">
								<text>{{item.LandingCount}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 底部导航栏 -->
		<view class="navigation">
			<navigator class="navigator" url="#">
				<view class="box now">
					<view class="icon"></view>
					<text>航前关注</text>
				</view>
			</navigator>
			<navigator class="navigator" url="/pages/flightQualityAssuranceReview/flightQualityAssuranceReview">
				<view class="box">
					<view class="icon"></view>
					<text>航班QAR</text>
				</view>
			</navigator>
			<navigator class="navigator" url="/pages/personalDataStats/personalDataStats">
				<view class="box">
					<view class="icon"></view>
					<text>个人统计</text>
				</view>
			</navigator>
			<navigator class="navigator" url="/pages/accountInformation/accountInformation">
				<view class="box">
					<view class="icon"></view>
					<text>我</text>
				</view>
			</navigator>
		</view>
	</view>

</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 获取flight数据
	// flightSchedule: 航班时间
	// flightNumber: 航班号
	// aircraftNumber: 飞机号
	// airport:起降机场
	// boardingGate: 机位-准备室
	// favorite: 收藏状态,0-该用户未收藏,1-该用户已收藏
	const mock1 = [{
		flightSchedule: "06200805",
		flightNumber: "S9801",
		aircraftNumber: "B2972",
		airport: "ZBAA-ZGSZ",
		boardingGate: "221-02",
		favorite: 0
	}, {
		flightSchedule: "06190805",
		flightNumber: "S9802",
		aircraftNumber: "B2972",
		airport: "ZBAA-ZGSZ",
		boardingGate: "602-34",
		favorite: 0
	}, {
		flightSchedule: "06180805",
		flightNumber: "S9803",
		aircraftNumber: "B2972",
		airport: "ZBAA-ZGSZ",
		boardingGate: "602-34",
		favorite: 0
	}, {
		flightSchedule: "06180804",
		flightNumber: "S9804",
		aircraftNumber: "B2972",
		airport: "ZBAA-ZGSZ",
		boardingGate: "-",
		favorite: 1
	}, ];
	const flight = ref(mock1);

	let datails = ref(0);

	//打开&关闭弹窗
	// 创建响应式数据
	const popupType = ref('center');
	// 获取组件引用
	const popup = ref(null);
	// 打开弹窗的方法
	function open(flightNum, type) {

		console.log(flightNum);
		// 根据 航班号flightNum 获取 机组信息datails数据
		// 	name: 姓名
		// 	post: 机上岗位
		// 	skillLevel:技术等级
		// 	LExpTime:左座飞行经历时间
		// 	RExpTime:左座飞行经历时间
		// 	CaptainExpTime:责任机长飞行经历时间
		// ﻿	LSeatCount:左座次数
		// 	RSeatCount:右座次数
		// 	LandingCount:着陆提纵次数
		const mock2 = [{
				name: '张三',
				post: '责任机长',
				skillLevel: 'TB',
				LExpTime: '2345.5h',
				RExpTime: 'xx',
				CaptainExpTime: 'xx',
				LSeatCount: '423',
				RSeatCount: '543',
				LandingCount: '293'
			},
			{
				name: '李四',
				post: '副驾',
				skillLevel: 'TB',
				LExpTime: '1345.5h',
				RExpTime: 'xx',
				CaptainExpTime: 'xx',
				LSeatCount: 'xx',
				RSeatCount: 'xx',
				LandingCount: 'xx'
			},
			{
				name: 'xxx',
				post: '跟班学员',
				skillLevel: 'F3',
				LExpTime: '345.5h',
				RExpTime: 'xx',
				CaptainExpTime: 'xx',
				LSeatCount: 'xx',
				RSeatCount: 'xx',
				LandingCount: 'xx'
			},
		];
		datails = ref(mock2);	

		popupType.value = type; // 更新弹出方向
		if (popup.value) {
			popup.value.open(); // 调用组件的 open 方法
		}

	};
	// 关闭弹窗的方法
	function close() {
		popup.value.close();
	};

	// 显示&隐藏收藏
	// 定义 refs 和初始变量
	let startX = 0; // 鼠标或触摸的起始位置
	let isDragging = false; // 标志变量，用于确定是否正在拖动
	let key = 0; //标志变量，用于确定当前点击的是key行
	const isShow = ref(new Array(mock1.length).fill(false)); //标志变量，用于标志key行收藏是否显示

	// 鼠标事件处理函数
	const startDrag = (index, event) => {
		startX = event.clientX; // 记录鼠标按下时的 X 坐标
		isDragging = true; // 设置拖动标志为 true
		key = index; // 记录鼠标按下时的行数
		document.addEventListener('mousemove', onMouseMove); // 监听鼠标移动事件
		document.addEventListener('mouseup', stopDrag); // 监听鼠标释放事件
	};

	const onMouseMove = (event) => {
		if (!isDragging) return; // 如果不是拖动状态，直接返回
		const deltaX = event.clientX - startX; // 计算拖动的水平距离
		if (deltaX > -10) { // 鼠标拖动向右，关闭收藏夹
			isShow.value[key] = false;
		} else { // 鼠标拖动向左，显示收藏夹
			isShow.value[key] = true;
		}
	};

	const stopDrag = () => {
		isDragging = false; // 结束拖动状态
		document.removeEventListener('mousemove', onMouseMove); // 移除鼠标移动事件监听器
		document.removeEventListener('mouseup', stopDrag); // 移除鼠标释放事件监听器
	};

	// 触摸事件处理函数
	const startTouch = (index, event) => {
		startX = event.touches[0].clientX; // 记录触摸开始时的 X 坐标
		key = index; // 记录触摸开始时的行数
	};

	const onTouchMove = (event) => {
		const currentTouchX = event.touches[0].clientX; // 当前触摸点的 X 坐标
		const deltaX = currentTouchX - startX; // 计算触摸滑动的水平距离
		if (deltaX > -10) { // 触摸滑动向右，关闭收藏夹
			isShow.value[key] = false;
		} else { // 触摸滑动向左，显示收藏夹
			isShow.value[key] = true;
		}
	};

	const endTouch = () => {
		// 触摸结束时的处理
	};

	// 用户点击收藏
	function handleFavorite(index) {
		flight.value[index].favorite = (flight.value[index].favorite + 1) % 2;
	}

	// 用户点击排序
	let isDown = true; //初始默认降序
	function sortByFlightSchedule() {
		if (isDown) {
			flight.value.sort((a, b) => a.flightSchedule - b.flightSchedule);

		} else {
			flight.value.sort((a, b) => b.flightSchedule - a.flightSchedule);
		}
		isDown = !isDown;
	}
</script>

<style lang="scss" scoped>
	.layout {
		height: 100vh;
		background: #2C3F60;
		color: white;
	}

	.head {
		height: 50px;
		display: flex;

		.title {
			width: 75vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.iconBox {
			width: 20vw;
			display: flex;
			justify-content: center;
			align-items: center;

			.icon {
				padding: 2px;
				margin: 2px;
				border: 1px solid #555555;
				border-radius: 50%;
				background: #25324F;
			}
		}
	}

	.content {

		.table {
			font-size: 12px;
			color: white;

			.scroll-box {
				width: 100vw;
				height: calc(100vh - 146px);
				overflow-y: scroll;
				/* 允许 Y 轴滚动 */
				overflow-x: hidden;
				/* 隐藏 X 轴的滚动条 */
				scrollbar-width: none;
				/* Firefox */
				-ms-overflow-style: none;
				/* Internet Explorer and Edge */
			}

			.scroll-box::-webkit-scrollbar {
				display: none;
				/* Safari and Chrome */
			}

			.tr {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;

				.th {
					background: #25324F;
					height: 36px;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					padding-left: 2px;
				}

				.td {

					height: 40px;
					border-bottom: 1px solid #445677;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;

					.view {
						color: #409EFF;
					}

				}

				.favorite {
					width: 48px;
					text-align: center;
					background: #409EFF;
				}

				.active {
					background: #F59A23;
				}

				.diamond {
					position: relative;
					width: 12px;
					height: 12px;
					margin-left: 2px;
				}

				.diamond::before,
				.diamond::after {
					content: "";
					position: absolute;
					width: 0;
					height: 0;
					border-style: solid;
				}

				.diamond::before {
					border-width: 0 6px 6px 6px;
					border-color: transparent transparent white transparent;
					/* 上半部分三角形 */
					top: 0;
					left: 0;


				}

				.diamond::after {
					border-width: 6px 6px 0 6px;
					border-color: white transparent transparent transparent;
					/* 下半部分三角形 */
					bottom: -2px;
					left: 0;
				}

			}
		}
	}

	.datails-box {
		width: 100vw;
		padding: 5vh 0;
		background: #25324F;
		display: flex;
		justify-content: center;
		align-items: center;

		.close {
			width: 16px;
			height: 16px;
			position: absolute;
			top: 2vh;
			right: 4vw;
		}

		.table-box {
			width: 90vw;
			background: #2C3F60;
			border-radius: 1%;
			padding: 8px;

			.table {
				background: #2C3F60;
				padding: 8px 0;

				.tr {
					display: flex;
					flex-direction: row;
					justify-content: center;

					.th,
					.td {
						border-top: 1px solid #555555;
						border-left: 1px solid #555555;
						flex: 1;
						padding: 8px 0;
						display: flex;
						align-items: center;
					}

					.th:first-of-type,
					.td:first-of-type {
						flex: 2 1 0;
					}

					.th:last-of-type,
					.td:last-of-type {
						border-right: 1px solid #555555;
					}
				}

				.tr:last-of-type {
					.td {
						border-bottom: 1px solid #555555;
					}
				}
			}
		}
	}

	.navigation {
		color: #AAAAAA;
		height: 59px;
		border-top: 1px solid #555555;
		display: flex;
		align-items: center;

		.navigator {
			flex: 1;

			.box {
				display: flex;
				flex-direction: column;
				align-items: center;

				.icon {
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: #AAAAAA;
				}
			}

			.now {
				color: white;

				.icon {
					background-color: white;
				}
			}
		}
	}
</style>