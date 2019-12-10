# uft-gui-aos-tests
This repository is a container for UFT tests developed to implement User Stories in the DAB

## Currently there is one test, uft-gui-aos-order-purchase that:
- Logs in
- Shops and purchases - as many times as there are lines in the local sheet
- Logs out

Note that you will have to edit the Login action and enter your AOS credentials
Also - this test uses a shared Object Repository. There seems to be a problem with git and shared OR. After you clone the project, you will get errors that the Shared OR, AOS.tsr cannot be found. Before running, simplly right click on each action, and associate aos.tsr with the action.
