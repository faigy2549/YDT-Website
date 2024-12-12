using Entities;
using Repositories;
using Services;
using DTOs;
using AutoMapper;
using System.Collections.Generic;

namespace Services
{
    public class ShiurService : IShiurService
    {
        private readonly IShiurRepository _shiurRepository;
        private readonly IMapper _mapper;
        public ShiurService(IShiurRepository shiurRepository, IMapper mapper)
        {
            _shiurRepository = shiurRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ShiurDTO>> GetAllAsync()
        {
            var shiurim = await _shiurRepository.GetAllAsync();
            if (shiurim == null) return null;

            return _mapper.Map<IEnumerable<ShiurDTO>>(shiurim);
          
        }

        public async Task<ShiurDTO> GetByIdAsync(int id)
        {
            var shiur = await _shiurRepository.GetByIdAsync(id);
            if (shiur == null) return null;

            return _mapper.Map<ShiurDTO>(shiur);
        }

        public async Task<IEnumerable<ShiurDTO>> GetByLengthAsync(TimeSpan minLength, TimeSpan maxLength)
        {
            var shiurim = await _shiurRepository.GetByLengthAsync(minLength, maxLength);
            if (shiurim == null) return null;

            return _mapper.Map<IEnumerable<ShiurDTO>>(shiurim);
        }

        public async Task<IEnumerable<ShiurDTO>> GetByYearAsync(int year)
        {
            var shiurim = await _shiurRepository.GetByYearAsync(year);
            if (shiurim == null) return null;

            return _mapper.Map<IEnumerable<ShiurDTO>>(shiurim);
        }

        public async Task<IEnumerable<ShiurDTO>> GetByRavIdAsync(int ravId)
        {
            
            var shiurim = await _shiurRepository.GetByRavIdAsync(ravId);
            if (shiurim == null) return null;

            return _mapper.Map<IEnumerable<ShiurDTO>>(shiurim);
        }

        public async Task<ShiurDTO> AddAsync(ShiurDTO shiurdto)
        {
            var shiur = _mapper.Map<Shiur>(shiurdto); // Map from DTO to entity

            await _shiurRepository.AddAsync(shiur);
            return _mapper.Map<ShiurDTO>(shiur);
        }

        public async Task<ShiurDTO> UpdateAsync(ShiurDTO shiurdto)
        {
            
            var shiur =  _mapper.Map<Shiur>(shiurdto); ;
            if (shiur == null) return null;
            await _shiurRepository.UpdateAsync(shiur);

            return _mapper.Map<ShiurDTO>(shiur);
        }
        public async Task DeleteAsync(int id)
        {
            var shiur = await _shiurRepository.GetByIdAsync(id);
            if (shiur != null)
            {
                await _shiurRepository.DeleteAsync(shiur);
            }
            else
            {
                throw new ArgumentException($"Shiur with id {id} not found");
            }
        }
    }
}
