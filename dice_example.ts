const valid_dice_dots = [1, 2, 3, 4, 5, 6] as const;
type Dice = (typeof valid_dice_dots)[number];

function isDice(input: number): input is Dice {
    return (valid_dice_dots as any as number[]).includes(input)
}

function roll(input: number) {
    [1, 2, 3]
        .filter(isDice)
	    .map(n => n); // number
}
