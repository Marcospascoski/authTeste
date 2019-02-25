import { TestBed } from '@angular/core/testing';
import { JwtService } from './jwt.service';
describe('JwtService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(JwtService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=jwt.service.spec.js.map