// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  // Optional: Add more test cases if needed
  it("returns 0 for someone born this year", () => {
    const birthYear = new Date().getFullYear();
    const expectedAge = 0;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns a positive age for a birth year in the past", () => {
    const birthYear = 1900;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toBe(expectedAge);
  });
});
