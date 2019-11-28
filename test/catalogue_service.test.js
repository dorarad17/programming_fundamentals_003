const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });
  });
    test("returns false if the book does not exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "hdhdh"
        )
      ).toBe(false);
    });
  });

    describe("catalogueService.countBooksByFirstLetter", () => {
      test("returns the total number of books beginning with a given letter", () => {
        expect(catalogueService.countBooksByFirstLetter("G")).toBe(2);
      });
    });

    describe("catalogueService.getQuantity", () => {
      test("returns the total number of a certain book in stock", () => {
        expect(catalogueService.getQuantity("The Yellow Wallpaper")).toBe(12);
      });
    });

    describe("catalogueService.getBooksByAuthor", () => {
      test("returns an array of books based on the author", () => {
        expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]);
      });
    });

    describe("catalogueService.checkQuantity", () => {
      test("checks if the quantity entered of a title is true or false", () => {
        expect(catalogueService.checkQuantity("By Night In Chile",8)).toBe(true);
      });
    });

    