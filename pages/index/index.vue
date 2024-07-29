<template>
	<view class="layout">
		<view class="head">
			<view class="title"><text>计划航班</text></view>
			<view class="iconBox">
				<uni-icons class="icon" type="search" size="20" color="white"></uni-icons>
				<uni-badge class="uni-badge-left-margin" :text="22" absolute="rightTop" size="small">
					<uni-icons class="icon" type="notification" size="20" color="white"></uni-icons>
				</uni-badge>
			</view>
		</view>
		<view class="content">
			<view class="table">
				<view class="tr">
					<view class="th"><text>航班时间</text></view>
					<view class="th"><text>航班号</text></view>
					<view class="th"><text>飞机号</text></view>
					<view class="th"><text>起降机场</text></view>
					<view class="th"><text>机位-准备室</text></view>
					<view class="th"><text>机组</text></view>
				</view>
				<view class="tr">
					<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view class="td">
					<view class="td" title="flightNumber"><text>S9801</text></view class="td">
					<view class="td" title="aircraftNumber"><text>B2972</text></view class="td">
					<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view class="td">
					<view class="td" title="boardingGate"><text>221-02</text></view class="td">
					<view class="td" title="aircrew"><text class="view">查看</text></view class="td">
				</view>
				<view class="tr">
					<view class="td" title="flightSchedule"><text>06/20<br>08:05</text></view class="td">
					<view class="td" title="flightNumber"><text>S9801</text></view class="td">
					<view class="td" title="aircraftNumber"><text>B2972</text></view class="td">
					<view class="td" title="airport"><text>ZBAA-ZGSZ</text></view class="td">
					<view class="td" title="boardingGate"><text>221-02</text></view class="td">
					<view class="td" title="aircrew"><text class="view">查看</text></view class="td">
				</view>
			</view>
		</view>
		<view class="navigation">
			<view class="box now">
				<view class="icon"></view>
				<text>航前关注</text>
			</view>
			<view class="box">
				<view class="icon"></view>
				<text>航班QAR</text>
			</view>
			<view class="box">
				<view class="icon"></view>
				<text>个人统计</text>
			</view>
			<view class="box">
				<view class="icon"></view>
				<text>我</text>
			</view>
		</view>
	</view>
	
</template>

<script setup>

</script>

<style lang="scss">
	.layout{
		height: 100vh;
		background: #2C3F60;
		color: white;
	}
	.head {
		height: 50px;
		display: flex;
		.title{
			width: 80vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.iconBox{
			width: 20vw;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon{
				padding: 2px;
				border: 1px solid #555555;
				border-radius: 50%;
				background: #25324F;
			}
		}
	}

	.content {
		height: calc(100% - 110px);
		.table {
			font-size: 12px;
			color: white;
			.tr {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.th {
					background: #25324F;
					height: 36px;
					flex: auto;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.td {
					
					height: 40px;
					border-bottom:1px solid #445677;
					flex: auto;
					display: flex;
					justify-content: center;
					align-items: center;
					.view{
						color: #409EFF;
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
		justify-content: center;
		align-items: center;
		.box{
			flex: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.icon{
				width: 24px;
				height: 24px;
				border-radius: 50%;
				background: #AAAAAA;
			}
		}
		.now{
			color: white;
			.icon{
				background-color: white;
			}
		}
		
	}
</style>