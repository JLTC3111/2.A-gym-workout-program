export default function Hero() {
    return (
        <div className="max-w-3xl mx-auto text-center p-6">
            <h2 className="text-3xl font-bold mb-4">🏋️‍♂️ Complete this Training Program if You Want to...</h2>

            <ul className="benefits-list space-y-3 text-lg text-gray-700">
                <li>✅ Follow a simple program with guaranteed results</li>
                <li>🔥 Get fit, healthy, strong, and shredded</li>
                <li>💡 Learn more about gym, training, and technique</li>
                <li>💛 Become a lifetime gym bro</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">📜 The Rules</h3>
            <p className="mt-2 text-gray-600">To complete this program, you <b className="text-red-500">MUST</b> follow these 3 simple rules:</p>

            <div className="rules-list space-y-4 mt-4">
                <div className="rule-item bg-gray-100 p-4 rounded-lg shadow">
                    <p className="font-bold text-lg">😴 Rest</p>
                    <p className="text-gray-700">Ensure that you are taking rest days where necessary.</p>
                </div>
                <div className="rule-item bg-gray-100 p-4 rounded-lg shadow">
                    <p className="font-bold text-lg">🔄 Reps</p>
                    <p className="text-gray-700">
                        Every rep follows a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up" className="underline">2 - 2 - 2 tempo</abbr>.
                    </p>
                </div>
                <div className="rule-item bg-gray-100 p-4 rounded-lg shadow">
                    <p className="font-bold text-lg">🏋️ Weight*</p>
                    <p className="text-gray-700">Select the maximum weight that allows you to complete the set with good form.</p>
                </div>
            </div>

            <small className="block mt-3 text-gray-500">
                * The first and second set should be at 75% and 85% of your working weight used for the last two sets.
            </small>

            <h3 className="text-2xl font-semibold mt-6">📅 The Training Plan</h3>
            <p className="text-gray-700 mt-2">
                This training plan follows the <b className="text-blue-500">Bro Split</b> method, using this rotation ⬇️
            </p>

            <p className="text-xl font-bold text-purple-600 mt-3">
                <i>Push → Pull → Legs → Repeat</i>
            </p>

            <p className="mt-4 text-gray-700">
                Complete all of the workouts below and track your progress along the way ✅
            </p>
        </div>
    );
}
