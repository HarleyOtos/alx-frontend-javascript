import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(
  firstName, lastName, filename,
) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(filename);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled'
        ? result.value : result.reason.message,
    })));
}
