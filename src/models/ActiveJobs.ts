export interface IActiveJobs {
  code: number;
  message: string;
  activeJobs: IActiveJob[];
  // result: any[];
  jobCount: JobCount;
}
interface JobCount {
  urgentCount: number;
  upcomingCount: number;
  invitedJobCount: number;
  listViewCount: number;
  activeCount: number;
}
export interface IActiveJob {
  recursive_job_type: Recursivejobtype;
  job_time: Jobtime;
  packageObj: PackageObj;
  jobTimingObj: JobTimingObj;
  attachedDocument: AttachedDocument;
  pickup_date?: string;
  shipment_day?: string;
  jobCreatedBy: string;
  selected_driver_for_transfer_job?: string;
  tip_amount: number;
  employee_status: boolean;
  urls3_ticket_customer?: string;
  urls3_ticket_pharmacy?: string;
  _id: string;
  booking_code: string;
  pick_up_location: number[];
  drop_off_location: number[];
  pickup_lat_long: number[];
  dropoff_lat_long: number[];
  transfer_driver_lat_long: number[];
  transfer_driver_location: string;
  note: string;
  commentForNotDelivered: string;
  reasonForNotDelivered: string;
  imageForNotDelivered: string[];
  customer_name: string;
  customer_f_name: string;
  customer_l_name: string;
  establishment_name: string;
  customer_phone: string;
  customer_country_code: string;
  customer_email: string;
  customer_address: string;
  customer_appartment: string;
  customer_door_code: string;
  delivery_type: string;
  estimate_distance: number;
  customer_type: string;
  job_status: string;
  isExpired: boolean;
  pickedUp: boolean;
  startDropup: boolean;
  isAccepted: boolean;
  transferDriver_id: string[];
  decline_transfer_job_driver_id: string[];
  pick_up_note: string;
  dropoff_note: string;
  pickup_images: string[];
  dropoff_images: string[];
  ride_fare: number;
  ride_fare_without_tax: number;
  job_amount: number;
  collected_amount: number;
  collected_amount_note: string;
  night_charge: number;
  weekend_charge: number;
  taxes: number;
  tax: number;
  gst: number;
  qst: number;
  processingFee: number;
  stripeFee: number;
  item_stripe_fee: number;
  isTransferred: boolean;
  job_from: string;
  driverArr: string[];
  pharamcy_payment: boolean;
  customer_payment: boolean;
  job_type: string;
  order_reciever_by: string;
  reciever_name: string;
  customer_signature: string;
  job_prescription: string[];
  jobFor: string;
  isPrivate: boolean;
  job_tags: Jobtag[];
  other_fare: number;
  departureTimeStr: string;
  deliveryTimeStr: string;
  totalServiceTime: string;
  timeZone: string;
  ride_payment_failed: boolean;
  delivery_message: string;
  expired_by_pharmacy: boolean;
  transferEvent: boolean;
  cancel_note_driver: string;
  cancel_by_driver: boolean;
  transferred_by_driver_name: string;
  transferred_by_driver_phone: string;
  isRecursiveJob: boolean;
  recursionType: string;
  isNotDelivered: boolean;
  selected_drivers: string[];
  jobCreatedFromCron: boolean;
  stateTax: number;
  stateProcessingFee: number;
  collected_amount_pharmacy: number;
  collection_note_pharmacy: string;
  collected_amount_initial: string;
  job_create_initials: string;
  cheque_collected_from_driver: boolean;
  cheque_note: string;
  cheque_amount_initials: string;
  isRecursiveJobExist: boolean;
  customerTypeSelection: string;
  multiple_customers: string[];
  multiple_customers_info: Multiplecustomersinfo[];
  establishmentTagSelection: string;
  ownershipApprovedByPharmacy: boolean;
  jobCreatedFromCsv: boolean;
  recursive_notification_status: boolean;
  recursive_notification_drivers: string[];
  job_note_seen_driver: boolean;
  totalTagsPrices: number;
  dispatchCompanyId?: string;
  eyeWitnessNote: string;
  jobQrCodeUrl: string;
  selectedDispatchForJob: string[];
  isAcceptedByDispatch: boolean;
  jobAcceptedBy: string;
  jobCreatedByOnlineApi: boolean;
  jobForStatus: string;
  establishment_email: string;
  establishment_country_code: string;
  establishment_phone: string;
  user_id: Userid;
  job_date: string;
  createdAt: string;
  jobCreatedAt: string;
  stepper_status: Stepperstatus[];
  state_tax_id: string;
  pharmacy_long_lat: number[];
  stateTaxObj: StateTaxObj;
  updated_at: string;
  __v: number;
  customer_id: string;
  establishment_id?: string;
  driver_id: string;
  departureTime?: string;
  recursiveJobParentId?: string;
  recursive_end_date?: string;
  job_date_time?: string;
  acceptedTime?: string;
}
interface StateTaxObj {
  countryId: string;
  stateId: string;
  countrySortname: string;
  countryFullname: string;
  stateName: string;
  tpsTax: number;
  tvqTax: number;
  totalTax: number;
  processingFee: number;
  active: boolean;
  delete: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface Stepperstatus {
  _id: string;
  status_type: string;
  status_name_en: string;
  status_name_fr: string;
  dateTime: string;
}
interface Userid {
  country: Country;
  state: Country;
  city: Country;
  callbackUrls: CallbackUrls;
  country_flag_name: string;
  isPharmacyTypeOnline: boolean;
  _id: string;
  fname: string;
  lname: string;
  fullname: string;
  email: string;
  password: string;
  profile_img: string;
  pharmacy_name: string;
  total_jobs: number;
  active_jobs: number;
  completed_jobs: number;
  avg_revenue: number;
  total_expense: number;
  available_cabs: number;
  token: string;
  adminLoginToken: string;
  socialType: string;
  socialId: string;
  mobile_no: string;
  country_code: string;
  rating_pharmacy: number;
  active: boolean;
  isVerified: boolean;
  delete: boolean;
  location: string;
  stripe_customerId: string;
  isOnline: boolean;
  selected_card: string;
  postcode: string;
  country_name_code: string;
  my_jobs: string[];
  job_count: number;
  pickup_count: number;
  delivery_count: number;
  pharmacy_code: string;
  payment_request: boolean;
  amount_payable: number;
  accepted_job: boolean;
  upcoming_jobs: string[];
  timeZone: string;
  payment_due: boolean;
  accepted_pending_counts: number;
  language: string;
  isSubscription: boolean;
  available_job: number;
  email_verified: boolean;
  mobile_verified: boolean;
  otp_mobile: string;
  otp_email: string;
  cookie_status: boolean;
  lat_long: number[];
  createdAt: string;
  __v: number;
  last_requested_payment?: string;
  last_paid_on?: string;
  preffered_drivers: string[];
  pharmacy_landline_num: string;
  privacy_policy_accept_date: string;
  selectedAssignedDrivers: string[];
  devices: string[];
  credentials_for_dispatch: Credentialsfordispatch;
  dispatchCompanyId?: string;
  assignedDrivers: string[];
  emailNotifications: boolean;
  preffered_dispatches: string[];
  apartment_suite?: string;
  fax_country_code?: string;
  fax_number?: string;
  suite_number?: string;
  categories?: string[];
  updatedAt?: string;
  groups?: string[];
  roles?: Role[];
  shopEnabled?: boolean;
  address?: string;
  phone?: string;
  isSubscribedByDispatch?: boolean;
}
interface Role {
  name: string;
  displayName: string;
  description: string;
  _id: string;
  permissions: string[];
}
interface Credentialsfordispatch {
  codeCreatedAt?: string;
  secret_code: string;
}
interface CallbackUrls {
  acceptSingleJob: string;
  acceptMultipleJobs: string;
  ownershipSingleJob: string;
  ownershipMultipleJobs: string;
  completeJob: string;
  cancelJobByDriver: string;
  notDeliveredJob: string;
}
interface Country {
  short_name: string;
  long_name: string;
}
interface Multiplecustomersinfo {
  customer_name: string;
  customer_f_name: string;
  customer_l_name: string;
  establishment_name: string;
  phone_no: string;
  country_code: string;
  email: string;
  appartment_no: string;
  door_code: string;
  location: string;
  lat_long: number[];
  customer_type: string;
  active: boolean;
  delete: boolean;
  recursiveJobs: string[];
  customers_count: number;
  establishment_email: string;
  establishment_country_code: string;
  establishment_phone: string;
  pickup_note: string;
  delivery_note: string;
  _id: string;
  pharmacy_id: string;
  createdAt: string;
  establishment_id?: string;
  __v: number;
}
interface Jobtag {
  no_of_times_used: number;
  tag_price: number;
  _id: string;
  tag_type: string;
  tag_code: string;
  tag_for: string;
  tag_for_french: string;
  default_key: string;
  running: boolean;
  running1: boolean;
  tag_image: string;
  createdAt?: string;
  isDisabled?: boolean;
  __v?: number;
}
interface AttachedDocument {
  url: string;
  docName: string;
}
interface JobTimingObj {
  startTime: StartTime;
  endTime: StartTime;
  type: string;
  nameEn: string;
  nameFr: string;
  startDateTime: string;
  endDateTime: string;
}
interface StartTime {
  hour: string;
  minute: string;
}
interface PackageObj {
  package: string;
  small: string;
  large: string;
  extraLarge: string;
  label: string;
  weight: string;
}
interface Jobtime {
  hours: string;
  min: string;
}
interface Recursivejobtype {
  recurisve_type: string;
  daily_type: string;
  selected_week_days: Selectedweekday[];
}
interface Selectedweekday {
  item_id: number;
  item_text: string;
  item_text_french: string;
}
