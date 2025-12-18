import { Config } from '../config';

const getAppleOSVersionResponse = async (deviceModel: string, currentOSVersion: string = '') => {
    const response = await fetch(`${Config.TCAPI_URL}/appleosversion/${deviceModel}?currentOSVersion=${currentOSVersion}`);
    if (!response.ok) {
        throw new Error(`Error fetching Apple OS version: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}

export { getAppleOSVersionResponse };