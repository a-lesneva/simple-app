 import { TestBed, async, ComponentFixture } from '@angular/core/testing';
 import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let myCounter: AppComponent;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));
  
  // pre-defined tests commented
  // it('should create the app', () => {
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'simple-app'`, () => {
  //   expect(app.title).toEqual('simple-app');
  // });

  // test where an exception occurs at runtime
  it('test an exception for reset action when counter=0', () => {
    myCounter = new AppComponent();
    myCounter.counter = 0;
    expect(myCounter.reset).toThrow("The counter is already 0!");
  });
  // a test where a function is tested in an application and show result verification
  it('test if increment returns counter+1', () => {
    myCounter = new AppComponent();
    myCounter.counter = 25;
    myCounter.increment();
    expect(myCounter.counter).toBe(26);
  }); 

  //Test DOM manipulation (Verify a certain html element exists)
  it('test if button to reset the counter exists', () => {
    const buttonReset = fixture.debugElement.nativeElement.querySelector('.btn.btn-warning');
    expect(buttonReset).toBeDefined();
  });

});
