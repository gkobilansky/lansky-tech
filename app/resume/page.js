export const metadata = {
	title: 'Resume | Gene Kobilansky',
	description: 'View and download Gene Kobilansky’s latest resume.',
};

const resumePath = encodeURI('/Gene Kobilansky Resume - Dec 2025.pdf');

export default function ResumePage() {
	return (
		<section className="min-h-screen bg-white px-4 py-16 text-gray-900">
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
				<header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
							Resume
						</p>
						<h1 className="text-3xl font-semibold md:text-4xl">Gene Kobilansky</h1>
						<p className="text-sm text-gray-500">Updated December 2025</p>
					</div>

					<div className="flex flex-wrap gap-3">
						<a
							href={resumePath}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
						>
							Open in new tab
						</a>
						<a
							href={resumePath}
							download
							className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
						>
							Download PDF
						</a>
					</div>
				</header>

				<div className="h-[80vh] overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
					<iframe
						src={resumePath}
						title="Gene Kobilansky Resume"
						className="h-full w-full"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
