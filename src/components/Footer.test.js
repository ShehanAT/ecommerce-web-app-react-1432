jest.useFakeTimers();
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import UserProvider from "../context/user";
configure({ adapter: new Adapter() });
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {  userSignin: {  }, productList: { } }; 
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Footer from './Footer';


// jest.mock('axios', () => ({
//     post: () => Promise.resolve({ data: 'data' }),
// }));

describe('Testing Footer component', () => {

    let component;

 

    beforeEach(() => {
        const store = mockStore(initialState);

        component = render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <UserProvider>
                        <Footer />
                    </UserProvider>
                </QueryClientProvider>
            </Provider>)
    });

    test("Given the footer is rendered When the footer is displayed Then the Navigations title should be displayed", () => {
       

        expect(screen.getByText('Navigations')).toHaveTextContent("Navigations");
    });

    
    // test("Given the footer is rendered When the footer is displayed Then the Contact Info subtitle should be displayed", () => {
    //     expect(screen.getByText('Contact Info')).toHaveTextContent("Contact Info");
    // });

    // test("Given the footer is rendered When the footer is displayed Then the Promo subtitle should be displayed", () => {
    //     expect(screen.getByText('Promo')).toHaveTextContent("Promo");
    // });

    // test("Given the footer is rendered When the Email Subscribe field is displayed Then the user should be able to type into it", () => {
    //     let emailSubscribeField = component.container.querySelector('#email_subscribe');
    //     emailSubscribeField.textContent = "testing123@gmail.com";

    //     expect(emailSubscribeField.textContent).toEqual("testing123@gmail.com");
    // });

    // test("Given the footer is rendered When the user types into the Email Subscribe field Then the user should be able to find the Send button", async () => {
    //     let emailSubscribeField = component.container.querySelector('#email_subscribe');
    //     emailSubscribeField.textContent = "testing123@gmail.com";

    //     let emailSubscribeSubmitBtn = component.container.querySelector('#emailSubBtn');

    //     expect(emailSubscribeSubmitBtn).not.toBeNull();
    // });

});