import React, { useState, Fragment, useCallback } from "react";
import { Carousel } from "antd";
import { isMobile } from "react-device-detect";
import ArrowLeftIcon from "../../CustomIcons/ArrowLeftIcon";
import ArrowRightIcon from "../../CustomIcons/ArrowRightIcon";

interface IDashboardSliderContainer {
	slidesToShow?: number;
}
const DashboardSliderContainer: React.SFC<IDashboardSliderContainer> = (
	props
) => {
	const [slider, setSlider] = useState<any>();

	const next = useCallback(() => {
		if (slider) slider.slick.slickNext();
	}, [slider]);

	const prev = useCallback(() => {
		if (slider) slider.slick.slickPrev();
	}, [slider]);

	return (
		<Fragment>
			<Carousel
				ref={(c: any) => {
					if (c) setSlider(c);
				}}
				infinite={false}
				arrows={true}
				dots={false}
				slidesToShow={
					isMobile ? 1 : props.slidesToShow ? props.slidesToShow : 3
				}
			>
				{props.children}
			</Carousel>
			<div className="flex justify-end py-1">
				<button onClick={() => prev()}>
					<ArrowLeftIcon width={20} />
				</button>
				<button onClick={() => next()}>
					<ArrowRightIcon width={20} />
				</button>
			</div>
		</Fragment>
	);
};

export default DashboardSliderContainer;
