import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeEditGuard } from './employee-edit.guard';

describe('EmployeeEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeEditGuard]
    });
  });

  it('should ...', inject([EmployeeEditGuard], (guard: EmployeeEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
