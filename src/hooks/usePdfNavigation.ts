export const usePdfNavigation = () => {
    const scrollToPage = (pageNumber: number) => {
        const element = document.getElementById(`page_${pageNumber}`);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return {
        scrollToPage,
    };
};
