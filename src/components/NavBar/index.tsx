import React from "react";
import NavBarItem from "./NavBarItem";
import { SectionName } from "@/store/slices/root";
import { useAppSelector, useMediaQuery } from "@/hooks";
import { useTranslation } from "react-i18next";
import Settings from "./Settings";
import { selectScrolled } from "@/store/selectors";
type ItemSelectCallback = (name: SectionName) => void;
const animation = "transition-[box-shadow]";
const MobileNavBar: React.FC<{ showShadow: boolean }> = ({ showShadow }) => {
	const { t } = useTranslation();
	const shawdow = showShadow
		? "shadow-md mb-4 bg-amber-50"
		: "shadow-none bg-transparent";
	return (
		<div
			className={`${animation} flex justify-between w-screen py-2 px-3 fixed items-center bg-amber-50 dark:bg-slate-900 top-0 left-0 ${shawdow}`}
		>
			<div className="text-2xl font-semibold text-gray-700 dark:text-slate-300 text-center">
				{t("navbar.name")}
			</div>
			<Settings />
		</div>
	);
};
const DesktopNavBar: React.FC<{
	onClick: ItemSelectCallback;
	showShadow: boolean;
}> = ({ onClick, showShadow = false }) => {
	const { t } = useTranslation();
	const shadow = showShadow ? "shadow-md" : "shadow-none";

	return (
		<nav
			className={`${animation} fixed top-0 left-0 w-screen py-2 pl-4 pr-4 bg-amber-50 dark:bg-slate-900  ${shadow}`}
		>
			<div className="mx-auto max-w-screen-lg flex flex-row md:justify-end items-center">
				<div className="flex flex-row">
					<NavBarItem
						className="mr-8 md:mr-12 lg:mr-20"
						name="home"
						onClick={onClick}
					>
						{t("navbar.home")}
					</NavBarItem>
					<NavBarItem
						className="mr-8 md:mr-12 lg:mr-20"
						name="about-me"
						onClick={onClick}
					>
						{t("navbar.aboutMe")}
					</NavBarItem>
					<NavBarItem
						className="mr-8 md:mr-12 lg:mr-20"
						name="projects"
						onClick={onClick}
					>
						{t("navbar.projects")}
					</NavBarItem>
				</div>
				<Settings />
			</div>
		</nav>
	);
};
const NavBar: React.FC<{ onClick: ItemSelectCallback }> = ({ onClick }) => {
	const isMobile = useMediaQuery("(min-width: 640px)");
	const scrolled = useAppSelector(selectScrolled);

	return (
		<div>
			{!isMobile ? (
				<MobileNavBar showShadow={scrolled} />
			) : (
				<DesktopNavBar showShadow={scrolled} onClick={onClick} />
			)}
		</div>
	);
};

export default NavBar;
