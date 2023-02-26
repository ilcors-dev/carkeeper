import React from "react";
import { StyleSheet, View } from "react-native";

export const Avatar = ({ size = 45 }) => {
	const colors = [
		"#50514F",
		"#B4ADEA",
		"#FDFFF7",
		"#59FFA0",
		"#FF7F50",
		"#FF595E",
	];

	const pixels = [
		[1, 1, 1],
		[1, 1, 1],
	];

	return (
		<View style={[styles.container, { width: size, height: size }]}>
			{pixels.map((row, rowIndex) => (
				<View style={{ flexDirection: "row", flex: 1 }} key={rowIndex}>
					{row.map((pixel, pixelIndex) => (
						<View
							style={{
								flex: 1,
								backgroundColor:
									colors[Math.floor(Math.random() * colors.length)],
							}}
							key={`${rowIndex}-${pixelIndex}`}
						/>
					))}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		borderRadius: 50,
	},
});

export default Avatar;
