import { emailTemplate } from "../../src/js-foundation/01-template";

describe(' 01-temaplte', () => {

    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ')
    })

    test('emailTemplate should contain a thank you message', () => {
        expect(emailTemplate).toContain('Thank you')
    })
});
