<template>
	<view class="layout">
		<view class="head">
			<view class="title"><text>计划航班</text></view>
			<view class="iconBox">
				<uni-icons class="icon" type="search" size="20" color="#c5c5c5"></uni-icons>
				<uni-badge class="uni-badge-left-margin" :text="22" absolute="rightTop" size="small">
					<uni-icons class="icon" type="notification" size="20" color="#c5c5c5"></uni-icons>
				</uni-badge>
			</view>
		</view>
		<view class="content">
			<view class="table">
				<view class="tr">
					<view class="th"><text>航班时间</text>
						<view class="diamond"></view>
					</view>
					<view class="th"><text>航班号</text></view>
					<view class="th"><text>飞机号</text></view>
					<view class="th"><text>起降机场</text></view>
					<view class="th"><text>机位-准备室</text></view>
					<view class="th"><text>机组</text></view>
				</view>
				<view class="scroll-box">
					<view class="tr">
						<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view>
						<view class="td" title="flightNumber"><text>S9801</text></view>
						<view class="td" title="aircraftNumber"><text>B2972</text></view>
						<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view>
						<view class="td" title="boardingGate"><text>221-02</text></view>
						<view class="td" title="aircrew"><text class="view" @click="open">查看</text></view>
						<view class="td favorite hidden" title="favorite"><text>收藏</text></view>
					</view>
					<view class="tr">
						<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view>
						<view class="td" title="flightNumber"><text>S9801</text></view>
						<view class="td" title="aircraftNumber"><text>B2972</text></view>
						<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view>
						<view class="td" title="boardingGate"><text>-</text></view>
						<view class="td" title="aircrew"><text class="view">查看</text></view>
						<view class="td favorite hidden" title="favorite"><text>收藏</text></view>
					</view>
					<view class="tr">
						<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view>
						<view class="td" title="flightNumber"><text>S9801</text></view>
						<view class="td" title="aircraftNumber"><text>B2972</text></view>
						<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view>
						<view class="td" title="boardingGate"><text>221-02</text></view>
						<view class="td" title="aircrew"><text class="view">查看</text></view>
						<view class="td favorite" title="favorite"><text>收藏</text></view>
					</view>
					<view class="tr">
						<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view>
						<view class="td" title="flightNumber"><text>S9801</text></view>
						<view class="td" title="aircraftNumber"><text>B2972</text></view>
						<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view>
						<view class="td" title="boardingGate"><text>221-02</text></view>
						<view class="td" title="aircrew"><text class="view">查看</text></view>
						<view class="td favorite active" title="favorite"><text>取消收藏</text></view>
					</view>
				</view>

			</view>
		</view>
		<uni-popup ref="showDetails" type="center" :animation="false" :mask-click="false">
			<view class="datails-box">
				<view class="close" @click="close"><uni-icons type="close" size="16" color="#c5c5c5"></uni-icons></view>
				<view class="table-box">
					<text>机组人员</text>
					<view class="table" border stripe emptyText="暂无更多数据">
						<!-- 表头行 -->
						<view class="tr">
							<view class="th"><text></text></view>
							<view class="th"><text>张三</text></view>
							<view class="th"><text>李四</text></view>
							<view class="th"><text>xxx</text></view>
						</view>
						<!-- 表格数据行 -->
						<view class="tr">
							<view class="td"><text>机上岗位</text></view>
							<view class="td"><text>责任机长</text></view>
							<view class="td"><text>副驾</text></view>
							<view class="td"><text>跟班学员</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>技术等级</text></view>
							<view class="td"><text>TB</text></view>
							<view class="td"><text>TB</text></view>
							<view class="td"><text>F3</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>左座飞行经历时间</text></view>
							<view class="td"><text>2345.5h</text></view>
							<view class="td"><text>1345.5h</text></view>
							<view class="td"><text>345.5h</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>右座飞行经历时间</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>责任机长飞行经历时间</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>左座次数</text></view>
							<view class="td"><text>423</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>右座次数</text></view>
							<view class="td"><text>543</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
						</view>
						<view class="tr">
							<view class="td"><text>着陆提纵次数</text></view>
							<view class="td"><text>293</text></view>
							<view class="td"><text>xx</text></view>
							<view class="td"><text>xx</text></view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
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

<script>
	export default {
		methods: {
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.showDetails.open('center')
			},
			close() {
				this.$refs.showDetails.close()
			}
		}
	}
</script>

<style lang="scss">
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

				.hidden {
					display: none;
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
					bottom: 0;
					left: 0;
				}

				/* 为了调整两个三角形之间的空隙 */
				.diamond::before {
					margin-bottom: 3px;
					/* 控制空隙的大小 */
				}

				.diamond::after {
					margin-top: 3px;
					/* 控制空隙的大小 */
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