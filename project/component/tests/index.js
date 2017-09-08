describe('checkIfLogout', () => {
    it('should be available', () => {
        chai.expect(checkIfLogout).to.be.a('function');
    });
    it('should return nothing', () => {
        chai.expect(checkIfLogout('logout')).to.equal(undefined); // coolest test ever
    });
});

describe('setKey', () => {
    it('should be available', () => {
        chai.expect(setKey).to.be.a('function');
    });
    it('should return a string that matches a regexp', () => {
        chai.expect(setKey('Andreea Badiu')).to.match(new RegExp('[a-zA-Z]*'));
    });
    it('should return a string without spaces or commas', () => {
        chai.expect(setKey('Andreea Badiu')).to.equal('AndreeaBadiu');
    });
});

describe('setId', () => {
    it('should be available', () => {
        chai.expect(setId).to.be.a('function');
    });
});

describe('renderPage', () => {
    it('should be available', () => {
        chai.expect(renderPage).to.be.a('function');
    });
});

describe('setupEvent', () => {
    it('should be available', () => {
        chai.expect(setupEvent).to.be.a('function');
    });
});

describe('destroyEvent', () => {
    it('should be available', () => {
        chai.expect(destroyEvent).to.be.a('function');
    });
});
