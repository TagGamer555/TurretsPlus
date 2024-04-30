{
	// EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});         <-- note the 'exampleStructure' and 'example-structure' casing! >:O
	
	//P.S: Chronological sorting. Newer content will appear after older content. Top - oldest in the category; Bottom - newest in the category.
	
	// BLAZE FAMILY //
	// Family of turrets which ignite or melt targets by heat //
	const candle = extend(ItemTurret, "candle", {});
	
	// FREEZE FAMILY //
	// Family of turrets which slow down or freeze enemies via freezing efffects //
	const freezeRay = extend(ItemTurret, "freeze-ray", {});
}