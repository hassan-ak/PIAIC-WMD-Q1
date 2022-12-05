// Write your types here! ✨

// --- Addded Types
type MotionB = {
	from: "defendant" | "plaintiff";
	reason: string;
};

type MotionAll = MotionB & {
	status: "allowed";
	deliberationHours: number;
};
type MotionDen = MotionB & {
	status: "denied";
	deliberationHours: number;
	annoyedJustice: boolean;
};
type MotionPen = MotionB & {
	status: "pending";
	estimatedDeliberationHours: number;
};

type MotionS = MotionAll | MotionDen | MotionPen;

type MotionPre = MotionS & {
	classification: "suppress" | "dismiss" | "venue";
	step: "pre-trial";
};
type MotionPost = MotionS & {
	classification: "acquittal" | "correction" | "new trial";
	step: "post-trial";
};

type Motion = MotionPre | MotionPost;

export const motions: Motion[] = [
	{
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		annoyedJustice: true,
		deliberationHours: 1,
		status: "denied",
		classification: "acquittal",
		step: "post-trial",
	},
	{
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		annoyedJustice: true,
		deliberationHours: 2.5,
		status: "denied",
		classification: "correction",
		step: "post-trial",
	},
	{
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		deliberationHours: 4,
		status: "allowed",
		classification: "suppress",
		step: "pre-trial",
	},
	{
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		estimatedDeliberationHours: 3,
		status: "pending",
		classification: "new trial",
		step: "post-trial",
	},
	{
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		deliberationHours: 0.5,
		annoyedJustice: false,
		status: "denied",
		classification: "dismiss",
		step: "pre-trial",
	},
	{
		from: "defendant",
		reason: "Fillibuster?",
		annoyedJustice: true,
		deliberationHours: 1.5,
		status: "denied",
		classification: "correction",
		step: "post-trial",
	},
	{
		from: "defendant",
		reason: "A time was never specified for the duel.",
		annoyedJustice: true,
		deliberationHours: 0.25,
		status: "denied",
		classification: "venue",
		step: "pre-trial",
	},
	{
		from: "plaintiff",
		reason: "He's making a few good points!",
		annoyedJustice: true,
		deliberationHours: 5,
		status: "denied",
		classification: "correction",
		step: "post-trial",
	},
];
